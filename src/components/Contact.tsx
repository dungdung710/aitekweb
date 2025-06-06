const Contact = () => (
  <section className="py-16 bg-white" id="contact">
    <div className="max-w-xl mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold mb-6 text-blue-900">Contact Us</h2>
      <p className="mb-4 text-xl md:text-2xl">
        For collaboration, test drive, or feedback,<br />
        contact us at <a href="mailto:aitek.autovn@gmail.com" className="underline text-blue-800">aitek.autovn@gmail.com</a><br />
        or hotline: <b>0703 536 941</b>
      </p>
      <a
        href="mailto:aitek.autovn@gmail.com"
        className="inline-block mt-4 px-6 py-3 bg-blue-800 text-white font-bold rounded-full shadow hover:bg-blue-900 transition"
      >
        Send Email
      </a>
    </div>
  </section>
);

export default Contact;
