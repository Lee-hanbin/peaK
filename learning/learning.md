## 230310 - 미니콘다(Miniconda) 설치 및 크롤링 예제 - Ubuntu 22.04 LTS


### Crawling example using python BeautifulSoup, requests

```
$ sudo apt-get update
```

```
$ cd /tmp
```

```
$ sudo apt-get install wget
```

```
$ wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
```

```
$ sha256sum Miniconda3-latest-Linux-x86_64.sh
```

```
$ bash Miniconda3-latest-Linux-x86_64.sh
```

```
$ source ~/.bashrc
```

```
$ conda info
```

```
$ conda update conda
```

```
$ conda update --all
```

```
$ conda info --envs
```

```
$ conda activate 가상환경이름
```

```
$ conda install 모듈이름
```

```
$ pip install bs4
```

```
$ conda list
```

```
$ mkdir crawling
$ cd crawling
$ vi crawling.py
```
```python3
import requests
from bs4 import BeautifulSoup as bs


# 페이스북 메인 페이지 문구 크롤링
page = requests.get('https://ko-kr.facebook.com')
soup = bs(page.text, "html.parser")
element = soup.select('._8eso')
print(element)
```
![결과](img/result.png)
