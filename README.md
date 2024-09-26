# Introduction
  There are a lot of clean architecure examples on github and almost of them are good. But i would like to create an example of mine. This one focus on some features as below
  1/ The architecture does not depend on framework, database, external lib. It means we can replace express by another framework. In real app,  we dont need it because it gives you a lot of works, but i wanna provide it in my example
  2/ We have 4 layer same on circle of Clean Architecture


# Layer 1: Infrastructure
- Frameworks
- External service
- Implement Repository interfaces

# Layer 2: Adapters
- Things related to handle request/response such as controller, middleware, route, exception, interceptor

# Layer 3: Use Case
- Handle application business rule

# Layer 4: Domain
- Define Repository interfaces
- Define Entity
- Handle enterprise business rule

![CleanArchitecture Image from martinfowler](assets/CleanArchitecture.jpg)
