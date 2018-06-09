FROM nginx:alpine
ADD rootfs /
ADD . /usr/share/nginx/html/

