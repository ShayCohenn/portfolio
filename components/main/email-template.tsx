import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  name,
}) => (
  <div>
    Message from {name}
    <br />
    {message}
  </div>
);
