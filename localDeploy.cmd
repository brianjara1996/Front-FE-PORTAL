docker build . -t mf2
docker rm mf2 -f
docker run -d --name mf2 -p 3030:8080 mf2