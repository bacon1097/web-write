import { forwardRef } from "preact/compat";
import { JSX } from "preact/jsx-runtime";

export interface LineNumberProps extends JSX.HTMLAttributes<HTMLDivElement> {
  number: number;
}

const LineNumber = forwardRef<HTMLDivElement, LineNumberProps>(
  ({ number, ...props }: LineNumberProps, ref): JSX.Element => {
    return (
      <div
        ref={ref}
        {...props}
        style={{
          color: "var(--text-light)",
          display: "flex",
          lineHeight: "1.2em",
          fontSize: "1.2em",
          margin: "0 auto",
          padding: "0 0.2em",
          userSelect: "none",
        }}
      >
        {number}
      </div>
    );
  }
);

export default LineNumber;
