type NotFoundProps = {
  customMessage?: string;
};

export function NotFound({ customMessage }: NotFoundProps) {
  return <h1>{customMessage ?? "Page not found"}</h1>;
}
