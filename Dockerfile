FROM nginx:alpine
ADD default.conf /etc/nginx/conf.d/default.conf
ADD . /usr/share/nginx/html/

