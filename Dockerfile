FROM python:3.8

RUN pip install --upgrade pip
RUN apt update && apt upgrade -y
RUN apt install libgl1-mesa-glx -y


ENV USER=manuelgutierrezchaves
ENV TOKEN=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

RUN pip install git+https://$USER:$TOKEN@github.com/$USER/pycam/
RUN pip install git+https://$USER:$TOKEN@github.com/$USER/Element_class/
