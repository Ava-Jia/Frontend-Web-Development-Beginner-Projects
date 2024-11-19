import requests

def test_server():
    # 测试服务器是否运行
    try:
        response = requests.get('http://127.0.0.1:5000/')
        print("服务器状态测试:", response.text)
    except Exception as e:
        print("服务器连接错误:", str(e))

def test_chat():
    # 测试聊天功能
    try:
        response = requests.post(
            'http://127.0.0.1:5000/chat',
            json={"message": "你好"}
        )
        print("\n聊天测试结果:")
        print("状态码:", response.status_code)
        print("响应:", response.json())
    except Exception as e:
        print("聊天测试错误:", str(e))

if __name__ == "__main__":
    print("开始测试...")
    test_server()
    test_chat()