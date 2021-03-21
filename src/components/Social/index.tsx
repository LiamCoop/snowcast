import { Socials, Generic, Logo } from './style';

const SocialBar = () => (
  <Socials>
    <Generic />
    <Logo
      href="https://twitter.com/LiamCoopR"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB3aWR0aD0iMTIyIiBoZWlnaHQ9Ijk5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMjEuNTY4IDExLjY5NWE0OS44NjkgNDkuODY5IDAgMDEtMTQuMzI1IDMuOTI4YzUuMTUtMy4wODcgOS4xMDQtNy45NzUgMTAuOTY3LTEzLjc5OWE0OS45NDkgNDkuOTQ5IDAgMDEtMTUuODM4IDYuMDUyQTI0LjkxIDI0LjkxIDAgMDA4NC4xNjcgMEM3MC4zOTIgMCA1OS4yMjUgMTEuMTY3IDU5LjIyNSAyNC45NGMwIDEuOTU1LjIyIDMuODU5LjY0NiA1LjY4NC0yMC43MjktMS4wNC0zOS4xMDctMTAuOTctNTEuNDA4LTI2LjA1OWEyNC44MjQgMjQuODI0IDAgMDAtMy4zNzcgMTIuNTRjMCA4LjY1MiA0LjQwNCAxNi4yODYgMTEuMDk2IDIwLjc1OWEyNC44NDEgMjQuODQxIDAgMDEtMTEuMjk3LTMuMTJjLS4wMDIuMTA0LS4wMDIuMjA5LS4wMDIuMzE0IDAgMTIuMDg0IDguNTk3IDIyLjE2NSAyMC4wMDcgMjQuNDU2YTI0Ljk3NSAyNC45NzUgMCAwMS0xMS4yNjQuNDI3YzMuMTc0IDkuOTA5IDEyLjM4NSAxNy4xMiAyMy4yOTkgMTcuMzIxQTUwLjA0NCA1MC4wNDQgMCAwMTUuOTUgODcuOTRjLTIuMDEzIDAtMy45OTktLjExOC01Ljk1LS4zNDggMTEuMDM4IDcuMDc2IDI0LjE0OCAxMS4yMDUgMzguMjMzIDExLjIwNSA0NS44NzUgMCA3MC45NjItMzguMDA1IDcwLjk2Mi03MC45NjNhNzEuOTIgNzEuOTIgMCAwMC0uMDcyLTMuMjI3IDUwLjY5MiA1MC42OTIgMCAwMDEyLjQ0NS0xMi45MSIvPjwvc3ZnPg==')",
      }}
      target="_blank"
    />
    <Logo
      href="https://github.com/LiamCoopR/snowcast"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB3aWR0aD0iMTA1IiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjMuODc5IDk2LjYzNlY4Mi42OGMwLTMuNDktLjk5Ny02LjQ4LTMuNDg5LTguOTcyLjk5NyAwIDMuNDg5LS40OTggNi40OC0uOTk3IDYuOTc3LTEuNDk1IDExLjk2LTQuOTg0IDE0LjQ1My0xMC40NjYgMi45OS01Ljk4IDMuNDg5LTEyLjQ2IDEuOTk0LTE4Ljk0YTE2LjYzMyAxNi42MzMgMCAwMC0yLjQ5My01Ljk4Yy0xLjQ5NS0xLjQ5NS0xLjk5My0yLjQ5Mi0xLjQ5NS0yLjk5Ljk5Ny0zLjQ5Ljk5Ny03LjQ3Ny0uNDk4LTExLjk2Mi0uNDk5LS45OTctLjk5Ny0uOTk3LTEuNDk1LS45OTctMi45OSAwLTcuNDc2IDEuNDk1LTEyLjQ2IDQuNDg2LS45OTcuNDk4LTEuNDk2LjQ5OC0xLjQ5Ni40OThhNTAuNjA5IDUwLjYwOSAwIDAwLTI0LjQyMSAwYy0uNDk5IDAtLjk5NyAwLTEuNDk2LS40OTgtNC40ODUtMi40OTItNy45NzQtNC40ODYtMTAuOTY0LTQuNDg2LTEuNDk2LS40OTgtMS45OTQtLjQ5OC0yLjQ5MiAwLS40OTkuNDk4LS40OTkuOTk3LS45OTcgMS45OTQtLjk5NyAzLjk4Ny0uOTk3IDcuNDc2IDAgMTAuOTY0IDAgLjQ5OSAwIC45OTctLjQ5OS45OTctMy45ODcgNC45ODQtNS40ODIgMTAuOTY1LTQuNDg1IDE4LjQ0MSAxLjQ5NSA5Ljk2OCA2Ljk3NyAxNi40NDcgMTYuOTQ1IDE4Ljk0LjQ5OSAwIDIuNDkyLjQ5OCA2LjQ4IDEuNDk1LTEuNDk2IDEuNDk1LTIuNDkyIDMuNDg4LTIuOTkgNS45OCAwIC40OTktLjUuOTk3LS41Ljk5Ny02LjQ3OCAyLjQ5Mi0xMC45NjQuOTk3LTE0LjQ1My0zLjk4Ny0xLjk5My0yLjk5LTQuNDg1LTQuOTg0LTYuOTc3LTUuNDgyaC0yLjQ5MmMtLjk5NyAwLS45OTcuNDk4LS40OTkgMS40OTUuNDk5LjQ5OC45OTcuOTk3IDEuNDk1Ljk5NyAyLjQ5MiAxLjQ5NSA0LjQ4NiAzLjk4NyA1Ljk4MSA2Ljk3NyAxLjk5NCA0LjQ4NiA1LjQ4MyA2Ljk3OCAxMC45NjUgNy40NzYuNDk4IDAgMi45OSAwIDYuOTc4LS40OTh2OS40N2MwIC45OTYtLjQ5OSAxLjQ5NS0uOTk3IDEuOTkzLS45OTcuNDk5LTEuNDk1LjQ5OS0yLjQ5MiAwLTQuOTg0LTEuNDk1LTguOTcxLTMuNDg5LTEyLjQ2LTUuOThDNy4wNiA4Mi42OC0uOTE0IDY3LjcyNy4wODMgNDguNzg4Yy40OTktMTEuOTYyIDQuNDg2LTIxLjkzIDEyLjQ2LTMwLjlDMjAuNTE4IDguOTE2IDMwLjQ4NiAzLjQzMyA0My40NDQuOTQxYzEyLjk1OS0yLjQ5MiAyNC45MiAwIDM2LjM4NCA2Ljk3OCAxMS40NjMgNi45NzggMTkuNDM3IDE3LjQ0NCAyMi45MjYgMzAuNDAzIDMuNDg5IDEyLjk1OCAxLjk5NCAyNS40MTgtNC40ODUgMzcuMzgtNi40OCAxMS45NjItMTYuNDQ4IDE5LjkzNi0yOC45MDggMjMuOTIzLTMuOTg3LjQ5OS01LjQ4Mi0uNDk4LTUuNDgyLTIuOTl6Ii8+PC9zdmc+')",
      }}
      target="_blank"
    />
    <Logo
      href="https://www.linkedin.com/in/liamcoop/"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB3aWR0aD0iOTkiIGhlaWdodD0iOTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyLjYxNyA5OC45MTZIMi4yMjVWMzMuMzhoMjAuMzkydjY1LjU1LS4wMTR6TTEyLjQyNCAyNC40MDNBMTEuODEzIDExLjgxMyAwIDExMjQuMjMxIDEyLjU5YTExLjgwNiAxMS44MDYgMCAwMS0xMS44MDcgMTEuODEzem04Ni40ODQgNzQuNTEzSDc4LjU1MVY2Ny4wMzRjMC03LjYwMy0uMTUxLTE3LjM4My0xMC41OS0xNy4zODMtMTAuNTk4IDAtMTIuMjIgOC4yNzYtMTIuMjIgMTYuODMzVjk4LjkxSDM1LjM5OVYzMy4zOGgxOS41MjZ2OC45M2guMjgyYTIxLjQwOCAyMS40MDggMCAwMTE5LjI3OS0xMC41OTFjMjAuNjA0IDAgMjQuNDIzIDEzLjU3MSAyNC40MjMgMzEuMjN2MzUuOTY4eiIvPjwvc3ZnPg==')",
      }}
      target="_blank"
    />
    <Logo
      href="mailto:liamcoop@outlook.com"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEwLjc4NC45OEgxMi43NDVDNi4wMDUuOTguNTUxIDYuNDk1LjU1MSAxMy4yMzVsLS4wNiA3My41M2MwIDYuNzQgNS41MTQgMTIuMjU1IDEyLjI1NCAxMi4yNTVoOTguMDRjNi43NCAwIDEyLjI1NC01LjUxNSAxMi4yNTQtMTIuMjU1di03My41M2MwLTYuNzQtNS41MTQtMTIuMjU1LTEyLjI1NS0xMi4yNTV6bTAgMjQuNTFsLTQ5LjAyIDMwLjYzN0wxMi43NDYgMjUuNDlWMTMuMjM1bDQ5LjAyIDMwLjYzOCA0OS4wMi0zMC42MzhWMjUuNDl6Ii8+PC9zdmc+')",
      }}
      target="_blank"
    />
  </Socials>
);

export default SocialBar;
