"use client";

export default function SignupForm() {
  async function handleSubmit(formData) {
    const res = await fetch ("/api/signup",
    {
      method: "post",
      body: formData
    })
    const jsonResponse = await res.json();
    console.log(jsonResponse);
  }
  return (
    <section className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded shadow-2xl p-4">
      <h1 className="text-lg font-bold mb-4">Create Account</h1>
      <form action={handleSubmit} className="flex flex-col gap-1">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="px-4 py-2 border rounded mb-3"
          placeholder="enter full name here"
        />
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="px-4 py-2 border rounded mb-3"
          placeholder="enter phone number here"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="px-4 py-2 border rounded mb-3"
          placeholder="enter password here"
        />

        <button className="px-4 py-2 border rounded mb-3 bg-primary">
          Register
        </button>
      </form>
    </section>
  );
}
