import { ChangeEvent, FormEvent, useState } from "react";

interface FormProps {
  name: string;
  email: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState<FormProps | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData(formData); // Only update after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
      </div>

      <div>
        <label>
          Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>

      <button type="submit">Submit</button>

      {submittedData && (
        <div>
          <h1>{submittedData.name}</h1>
          <h1>{submittedData.email}</h1>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
