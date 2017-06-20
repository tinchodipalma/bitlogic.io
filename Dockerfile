FROM openresty/openresty:alpine-fat

RUN  apk add --update bash openssl && \
     /usr/local/openresty/luajit/bin/luarocks install lua-resty-auto-ssl

RUN openssl req -new -newkey rsa:2048 -days 3650 -nodes -x509 -subj '/CN=sni-support-required-for-valid-ssl' -keyout /etc/ssl/resty-auto-ssl-fallback.key -out /etc/ssl/resty-auto-ssl-fallback.crt

EXPOSE 80 443 8999

ENTRYPOINT ["/usr/local/openresty/nginx/sbin/nginx", "-g", "daemon off;"]

RUN mkdir -p /certs/storage/file/ && chown -R nobody:nobody /certs && chmod -R 700 /certs

VOLUME /certs

ADD default.conf /usr/local/openresty/nginx/conf/nginx.conf
ADD . /usr/share/nginx/html/

