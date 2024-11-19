import requests
import json

def test_chat_api():
    url = "http://127.0.0.1:5000/chat"
    headers = {"Content-Type": "application/json"}
    data = {"message": "你好"}
    
    try:
        response = requests.post(url, headers=headers, json=data)
        print("状态码:", response.status_code)
        print("响应内容:", response.json())
    except Exception as e:
        print("发生错误:", str(e))

if __name__ == "__main__":
    test_chat_api()