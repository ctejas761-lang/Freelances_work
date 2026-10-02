"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type InquiryStatus = "new" | "contacted" | "closed";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  service: string;
  status: InquiryStatus;
  createdAt: string;
  message: string;
};

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const stats = {
    total: inquiries.length,
    new: inquiries.filter((item) => item.status === "new").length,
    contacted: inquiries.filter((item) => item.status === "contacted").length,
    closed: inquiries.filter((item) => item.status === "closed").length,
  };

  async function loadInquiries() {
    try {
      const res = await fetch("/api/inquiries");
      if (!res.ok) throw new Error("Failed to load inquiries");
      const data = await res.json();
      setInquiries(data.inquiries ?? []);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load inquiries");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadInquiries();
  }, []);

  async function updateStatus(id: string, status: InquiryStatus) {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        throw new Error("Unable to update inquiry status");
      }

      await loadInquiries();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to update inquiry status");
    }
  }

  async function deleteInquiry(id: string) {
    try {
      const res = await fetch("/api/inquiries/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        throw new Error("Unable to delete inquiry");
      }

      await loadInquiries();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to delete inquiry");
    }
  }

  async function logout() {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      window.location.href = "/admin/login";
    } catch {
      window.location.href = "/admin/login";
    }
  }

  return (
    <main className="mx-auto max-w-7xl p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Admin
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            Project Inquiries
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Back to site
          </Link>
          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center justify-center rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-4">
        {[
          { label: "Total", value: stats.total },
          { label: "New", value: stats.new },
          { label: "Contacted", value: stats.contacted },
          { label: "Closed", value: stats.closed },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <p className="text-sm text-muted-foreground">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>

      {error ? (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center text-muted-foreground">
          Loading inquiries...
        </div>
      ) : inquiries.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center text-muted-foreground">
          No inquiries yet.
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border text-left text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-foreground">Name</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Email</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Service</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Status</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Date</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="align-top">
                    <td className="px-4 py-3 font-medium text-foreground">{inquiry.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      <a
                        href={`mailto:${inquiry.email}`}
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        {inquiry.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{inquiry.service || "—"}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <select
                          value={inquiry.status}
                          onChange={(event) =>
                            updateStatus(inquiry.id, event.target.value as InquiryStatus)
                          }
                          className="rounded-md border border-border bg-background px-2 py-1.5 text-xs font-medium text-foreground outline-none ring-offset-background focus:ring-2 focus:ring-primary"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {new Intl.DateTimeFormat("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      }).format(new Date(inquiry.createdAt))}
                    </td>
                    <td className="max-w-md px-4 py-3 text-muted-foreground">
                      <div className="whitespace-pre-wrap">{inquiry.message}</div>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => deleteInquiry(inquiry.id)}
                        className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-medium text-red-700 transition-colors hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}
