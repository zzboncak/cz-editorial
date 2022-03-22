import { useEffect } from "react";

export default function Notification({
  message,
  type,
  setDisplayNotification,
  timeout = 3000,
}: {
  message: string;
  type: "success" | "error";
  setDisplayNotification: React.Dispatch<React.SetStateAction<boolean>>;
  timeout?: number;
}) {
  // When the notification loads, set a timeout to remove the notification in 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setDisplayNotification(false);
    }, timeout);
  });

  return (
    <div className="notification-container">
      <div className={`notification-message ${type}`}>
        <div
          className="exit-container"
          onClick={() => setDisplayNotification(false)}
        >
          <div className="x-1"></div>
          <div className="x-2"></div>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}
