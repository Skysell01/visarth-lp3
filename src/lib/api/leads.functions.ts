import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import process from "node:process";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().trim().min(1, "Name is required").max(100),
      contact: z.string().regex(/^\d{10}$/, "Contact number must be exactly 10 digits"),
      city: z.string().trim().min(2, "City is required").max(100),
    })
  )
  .handler(async ({ data }) => {
    const webhookUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!webhookUrl) {
      console.warn("GOOGLE_SCRIPT_URL environment variable is not defined");
      return {
        success: true,
        message: "Demo mode: Lead logged locally (please set GOOGLE_SCRIPT_URL in your env)",
        data,
      };
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          contact: data.contact,
          city: data.city,
          timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
        }),
      });

      if (!response.ok) {
        throw new Error(`Google Script returned status ${response.status}`);
      }

      const responseText = await response.text();
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch {
        responseData = { text: responseText };
      }

      return { success: true, message: "Lead submitted successfully", result: responseData };
    } catch (error: any) {
      console.error("Error submitting lead:", error);
      return { success: false, error: error.message || "Failed to submit lead" };
    }
  });
