from django.core.mail import EmailMessage
import os

def send_security_code(email, authority_code):
    print(authority_code)
    
    html_content = f"<p>Athurization code is {authority_code}</p>"
    email = EmailMessage(
        "認証コード",
        html_content,
        'bluedream7004@gmail.com',
        [email]
    )
    email.content_subtype = "html"
    email.send()
    return {"status": "success", "status_code": authority_code}
def send_mail_verify_link(email, verification_link):
    
    print(verification_link)
    html_content = """
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Eメール認証</title>
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
            background-color: #00bda5;
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
            color: #00bda5;
            text-decoration: none;
            }
            .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            background-color: #00bda5;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 5px;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <div class="header">
            <h1>Nomoca-ai call</h1>
            </div>
            <div class="content">
            <h2>こんにちは お客様, </h2>
            <p>
                登録ありがとうございます。登録を完了し、アカウントを有効化するために、メールアドレスの確認を行ってください。
            </p>
            <p>
                以下のボタンをクリックしてメールアドレスを確認してください：
            </p>
            <a href="{{ verification_link }}" class="button">メールアドレスの確認</a>
            <div id=":im" class="a3s aiL ">
            <a href="{{ verification_link }}" target="_blank">{{ verification_link }}</a>
            <img alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important">
            <div class="yj6qo">
            </div>
            <div class="adL">
            </div></div>
            <p>
                アカウントを作成していない場合は、このメールを無視するか、サポートチームまでご連絡ください。
            </p>
            <p>
               よろしくお願いいたします。
            </p>
            </div>
            <div class="footer">
            <p>
                &copy; 2024 株式会社. All rights reserved.
            </p>
            </div>
        </div>
        </body>
        </html>
        """
    html_content = html_content.replace("{{ verification_link }}", verification_link)
    email = EmailMessage(
        "新規会員登録",
        html_content,
        'bluedream7004@gmail.com',
        [email]
    )
    email.content_subtype = "html"
    email.send()
    return {"status": "success", "status_code": verification_link}

def send_rest_password_link(email, verification_link):
    
    print(verification_link)
    html_content = """
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nomoca-ai call</title>
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
            background-color: #00bda5;
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
            color: #00bda5;
            text-decoration: none;
            }
            .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            background-color: #00bda5;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 5px;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <div class="header">
            <h1>パスワードの再設定 </h1>
            </div>
            <div class="content">
            <h2>こんにちは お客様,</h2>
            <p>
                パスワードリセットのリクエストを受け付けました。以下のボタンをクリックして、新しいパスワードを設定してください。
            </p>
            <a href="{{ verification_link }}" class="button">パスワードの再設定</a>
            <div id=":im" class="a3s aiL "><a href="{{ verification_link }}" target="_blank">{{ verification_link }}</a><img alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important"><div class="yj6qo"></div><div class="adL">
            </div></div>
            <p>
             このリンクは、リクエストから24時間以内にご使用ください。それ以降は無効になります。
            </p>
            <p>
                もしこのリクエストに覚えがない場合は、このメールを無視しても問題ありません。お手数ですが、何かご不明点がありましたら、サポートまでご連絡ください。<br>
                よろしくお願いいたします。
            </p>
            </div>
            <div class="footer">
            <p>
                &copy; 2024 株式会社. All rights reserved.
            </p>
            </div>
        </div>
        </body>
        </html>
        """
    html_content = html_content.replace("{{ verification_link }}", verification_link)
    email = EmailMessage(
        "認証コード",
        html_content,
        'bluedream7004@gmail.com',
        [email]
    )
    email.content_subtype = "html"
    email.send()
    return {"status": "success", "status_code": verification_link}
