"use client";

import { useState, FormEvent } from "react";
import { site } from "../lib/site";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [detail, setDetail] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setStatus("idle");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("err");
        setDetail(json.message || "Something went wrong.");
        return;
      }
      setStatus("ok");
      setDetail(json.message || "Request recorded.");
      form.reset();
      if (json.mailto) {
        // Offer mailto as a reliable delivery path
        window.location.href = json.mailto;
      }
    } catch {
      setStatus("err");
      setDetail(
        `Could not send the form. Please email ${site.email} directly.`
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label>
        Your name
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone{" "}
        <span className="hint">(optional)</span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        What do you need?
        <select name="kind" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          <option value="panel">Panel or screen</option>
          <option value="sign">Sign or house number</option>
          <option value="plate">Desk / name plate</option>
          <option value="gift">Engraved gift</option>
          <option value="commission">Other commission</option>
        </select>
      </label>
      <label>
        Size, wood, words, and where it will live
        <textarea
          name="details"
          required
          placeholder="Example: house numbers 4821, about 10 inches wide, for the front porch…"
        />
      </label>
      <label>
        Budget range{" "}
        <span className="hint">(optional)</span>
        <input name="budget" type="text" placeholder="e.g. under $100" />
      </label>
      <div className="form-actions">
        <button className="btn" type="submit" disabled={busy}>
          {busy ? "Sending…" : "Request a proof & price"}
        </button>
        <a className="btn btn-secondary" href={`mailto:${site.email}`}>
          Or email {site.email}
        </a>
      </div>
      {status === "ok" ? (
        <p className="status-ok" role="status">
          {detail}
        </p>
      ) : null}
      {status === "err" ? (
        <p className="status-err" role="alert">
          {detail}
        </p>
      ) : null}
    </form>
  );
}
