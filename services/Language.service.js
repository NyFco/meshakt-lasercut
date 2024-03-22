import fa from "~/locales/fa";

export function t(args) {
  const keys = args.split(".");
  let current = fa;
  keys.forEach(key => {
    current = current[key];
  });
  return current;
}
