import { ToastContainer } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const Toast = () => (
  <>
    <ToastContainer
      autoClose={1000}
      style={{
        width: "30vw",
        minWidth: "25rem",
        fontSize: "1.5rem",
        zIndex: 9999999,
      }}
      icon={false}
      position="bottom-right"
    />
    <style jsx>{`
      .Toastify__toast--success {
        color: var(--color-green);
      }
      .Toastify__toast--warning {
        color: var(--color-red);
      }
      .Toastify__progress-bar--success {
        background-color: var(--color-green);
      }
      .Toastify__progress-bar--warning {
        background-color: var(--color-red);
      }
    `}</style>
  </>
);

export const Tooltip = () => (
  <>
    <ReactTooltip className="custom-tooltip" />
    <style jsx>{`
      .custom-tooltip {
        font-size: 1.5rem;
        padding: 0.5rem;
      }
      @media (min-width: 1250px) {
        .custom-tooltip {
          display: block;
          background-color: var(--color-green);
          color: white;
        }
      }
    `}</style>
  </>
);
