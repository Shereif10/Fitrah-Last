// src/app/api/notify/route.ts

export async function POST(req: Request) {
  const {
    parentName,
    email,
    phone,
    country,
    childNumber,
    childrenData,
    interest,
    extra,
  } = await req.json();

  const childrenLines = childrenData
    .map(
      (child: { name: string; age: string }, i: number) =>
        `👦 Child ${i + 1}: ${child.name || "—"}, Age: ${child.age || "—"}`,
    )
    .join("\n");

  const text = `
🔔 New Fitrah Academy Inquiry

👤 Parent: ${parentName}
📧 Email: ${email}
📞 Phone: ${phone}
🌍 Country: ${country}
👨‍👩‍👧 Children: ${childNumber}
${childrenLines}
📚 Interest: ${interest}
💬 Note: ${extra}
  `.trim();

  const res = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      }),
    },
  );

  if (!res.ok) {
    return Response.json({ success: false }, { status: 500 });
  }

  return Response.json({ success: true });
}
