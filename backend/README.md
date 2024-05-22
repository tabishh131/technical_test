# Django Backend Project

This is the Django backend for our project. Follow the instructions below to get it up and running on your local machine.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Python](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installation/).


## Installing Django Backend Project

To install the Django Backend Project, follow these steps:

1. Navigate to the project directory:
    ```bash
    cd project
    ```

2. Activate virtualenv:
    ```bash
    virtualenv venv & source venv/bin/activate
    ```

3. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

## Running the Backend

To run the backend, follow these steps:

1. In the project directory, start the server:
    ```bash
    fastapi dev main.py
    ```

You should now be able to access the backend at `localhost:8000`.