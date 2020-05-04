FROM nginx

WORKDIR /var/www/html
RUN rm /etc/nginx/conf.d/*

COPY index.html .
COPY docker-entrypoint.sh .

COPY nginx.conf /etc/nginx/
ENTRYPOINT ["./docker-entrypoint.sh"]
