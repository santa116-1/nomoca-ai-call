#utils.py
# from sendgrid import SendGridAPIClient
# from sendgrid.helpers.mail import Mail
from cryptography.fernet import Fernet

def encrypt_data(data, key):
    cipher_suite = Fernet(key)
    cipher_text = cipher_suite.encrypt(data.encode())
    return cipher_text

def decrypt_data(cipher_text, key):
    cipher_suite = Fernet(key)
    plain_text = cipher_suite.decrypt(cipher_text).decode()
    return plain_text

# Generate a new key using cryptography library
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes  # Add this import
from base64 import urlsafe_b64encode

def generate_key():
    password = "P@ssw0rd1997"  # Change this to a strong, secret password
    salt = b"salt_123"  # Change this to a random, unique salt
    kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), iterations=100000, salt=salt, length=32, backend=default_backend())
    key = urlsafe_b64encode(kdf.derive(password.encode()))
    return key

SECRET_KEY = generate_key()

def send_security_code(email, verification_link):
    print(verification_link)

    html_content = """
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            }
            .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
            }
            .header {
            background-color: #0b57d0;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            }
            .header h1 {
            margin: 0;
            }
            .content {
            padding: 20px;
            }
            .content h2 {
            color: #3a536d;
            font-size: 24px;
            }
            .content p {
            color: #555555;
            font-size: 16px;
            line-height: 1.5;
            }
            .footer {
            background-color: #f4f4f4;
            color: #888888;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            }
            .footer a {
            color: #0b57d0;
            text-decoration: none;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <div class="header">
            <h1>Nomoca</h1>
            </div>
            <div class="content">
                <div id=":im" class="a3s aiL "><p>Your authentication code: {{ verification_link }}</p><img alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important"><div class="yj6qo"></div><div class="adL">
                </div>
            </div>
            <p>
                The Support Team
            </p>
            </div>
            <div class="footer">
            <p>
                &copy; 2024 All rights reserved.
            </p>
            <p>
                <a href="#">Unsubscribe</a> | <a href="#">Privacy Policy</a>
            </p>
            </div>
        </div>
        </body>
        </html>
        """
    html_content = html_content.replace("{{ verification_link }}", str(verification_link))
    # message = Mail(
    # from_email='santabaner1223@gmail.com',
    # to_emails=email,
    # subject='Mail-verify',
    # html_content=html_content
    # )
    # try:
    #     sg = SendGridAPIClient('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')
    #     response = sg.send(message)
    #     print("successfull", response.status_code)  # Print the status code
    #     if response.status_code == 202:
    #         print("Email sent successfully!")
    #         return {"status": "success", "status_code": response.status_code}
    #     else:
    #         print(f"Failed to send email. Status code: {response.status_code}")
    #         return {"status": "failure", "status_code": response.status_code}
    # except Exception as e:
    #     print(e)
    #     return {"status": "error", "message": str(e)}
    return {"status": "success", "status_code": "response.status_code"}
