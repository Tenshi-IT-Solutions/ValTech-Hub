import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  try {
    const { customerId } = await req.json();

    console.log("Received customerId:", customerId);

    if (!customerId) {
      return NextResponse.json({ error: "Missing customerId" }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const returnUrl = process.env.HOST_URL + '/dashboard';
    console.log("Return URL:", returnUrl);

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    });

    console.log("Created portal session:", portalSession.url);

    return NextResponse.json({ url: portalSession.url });
  } catch (error) {
    console.error("Stripe Billing Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
