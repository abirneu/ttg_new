import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Log the submission for debugging
        console.log("Contact Form Submission:", body);

        // Here you would typically send an email or save to a database
        // For now, we'll just return a success response

        return NextResponse.json(
            { message: "Form submitted successfully", data: body },
            { status: 200 }
        );
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
