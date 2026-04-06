export function openCookiebotRenew() {
  if (
    typeof window !== "undefined" &&
    window.Cookiebot &&
    typeof window.Cookiebot.renew === "function"
  ) {
    window.Cookiebot.renew();
  }
}
