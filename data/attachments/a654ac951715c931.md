# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "Student Portal" [ref=e4] [cursor=pointer]:
        - /url: index.html
      - generic [ref=e5]:
        - link "Login" [ref=e6] [cursor=pointer]:
          - /url: login.html
        - link "Signup" [ref=e7] [cursor=pointer]:
          - /url: register.html
  - generic [ref=e8]:
    - heading "Welcome to Apollo Hospital" [level=1] [ref=e9]
    - generic [ref=e10]:
      - link "Login" [ref=e11] [cursor=pointer]:
        - /url: login.html
      - link "Register" [ref=e12] [cursor=pointer]:
        - /url: register.html
      - link "Contact Us" [ref=e13] [cursor=pointer]:
        - /url: contact.html
```