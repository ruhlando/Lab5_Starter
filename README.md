# Lab 5 - Starter
- My Name: Fabio Ruhland

### Pt 3. Unit Testing with Jest

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. </br>
   
   No, because sending a message involves multiple parts working together (input, network, receiver), and unit tests only check small, isolated parts.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters. </br>
   
   Yes, because it’s a simple, isolated rule that can be tested on its own without involving the whole app.
