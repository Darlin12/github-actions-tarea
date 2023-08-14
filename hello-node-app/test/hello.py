from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def test():
    driver = webdriver.Chrome()
    driver.get("http://practixsao21hds.surge.sh")

    time.sleep(5)
    message_element = driver.find_element(By.TAG_NAME, "h1")

    # Get the text of the element
    message = message_element.text

    # Assert that the correct message is displayed
    expected_message = "Hello, Node.js!"
    assert message == expected_message, f"Expected '{expected_message}', but got '{message}'"

    print("Test passed!")

    # Pause script for 10 seconds before exiting
    time.sleep(10)

test()  # Call the test function





 
