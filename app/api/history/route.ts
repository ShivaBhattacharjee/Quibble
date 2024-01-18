import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    NextResponse.json({ message: "Under Develpoment POST" });
}
export async function GET(req: NextRequest) {
    NextResponse.json({ message: "Under Develpoment GET" });
}
export async function PUT(req: NextRequest) {
    NextResponse.json({ message: "Under Develpoment PUT" });
}
