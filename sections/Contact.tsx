"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  project: "",
  timeline: "",
  budget: "",
  contactMethod: "",
  bestTime: "",
  message: "",
});

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");

        setForm({
  name: "",
  email: "",
  phone: "",
  address: "",
  project: "",
  timeline: "",
  budget: "",
  contactMethod: "",
  bestTime: "",
  message: "",
});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="bg-zinc-950 py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
            Free Estimate
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Request Your Free Estimate
          </h2>

          <p className="text-zinc-400 mt-6 text-lg">
            Complete the form below and a MVMNT team member will contact you within one business day to schedule your free in-home consultation.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white"
          />

          <select
            value={form.project}
            onChange={(e) =>
              setForm({ ...form, project: e.target.value })
            }
            className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white"
          >
            <option value="">Select Project Type</option>
            <option>Kitchen Remodel</option>
            <option>Bathroom Remodel</option>
            <option>Basement Finish</option>
            <option>Flooring</option>
            <option>Exterior Remodel</option>
            <option>Deck Construction</option>
            <option>Other</option>
          </select>

          <input
  type="text"
  placeholder="Project Address"
  value={form.address}
  onChange={(e) =>
    setForm({ ...form, address: e.target.value })
  }
  className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:border-yellow-500 outline-none transition"
/>

<select
  value={form.timeline}
  onChange={(e) =>
    setForm({ ...form, timeline: e.target.value })
  }
  className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:border-yellow-500 outline-none transition"
>
  <option value="">Desired Start Time</option>
  <option>ASAP</option>
  <option>Within 30 Days</option>
  <option>1–3 Months</option>
  <option>3–6 Months</option>
  <option>Just Planning</option>
</select>

<select
  value={form.budget}
  onChange={(e) =>
    setForm({ ...form, budget: e.target.value })
  }
  className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:border-yellow-500 outline-none transition"
>
  <option value="">Estimated Budget</option>
  <option>Under $10,000</option>
  <option>$10,000 - $25,000</option>
  <option>$25,000 - $50,000</option>
  <option>$50,000 - $100,000</option>
  <option>$100,000+</option>
</select>

<input
  type="file"
  multiple
  className="md:col-span-2 text-zinc-300"
/>
<select
  value={form.contactMethod}
  onChange={(e) =>
    setForm({ ...form, contactMethod: e.target.value })
  }
  className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:border-yellow-500 outline-none transition"
>
  <option value="">Preferred Contact Method</option>
  <option>Phone Call</option>
  <option>Text Message</option>
  <option>Email</option>
</select>

<input
  type="text"
  placeholder="Best Time to Contact You"
  value={form.bestTime}
  onChange={(e) =>
    setForm({ ...form, bestTime: e.target.value })
  }
  className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:border-yellow-500 outline-none transition"
/>

          <textarea
            rows={7}
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-yellow-500 text-black py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition"
          >
            {loading ? "Sending..." : "Request My Free Estimate"}
          </button>

        </form>

        {status === "success" && (
          <p className="text-green-400 text-center mt-8">
            Thank you! Your request has been sent.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-center mt-8">
            Something went wrong. Please try again.
          </p>
        )}

      </div>
    </section>
  );
}