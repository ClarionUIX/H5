      $   $  tOpS     \�                              "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "                      "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "   "      b b �                       
            �    �	 	    �  #�    *4>HR��������������������������������������������������������������������������������������������������������������������������������������������������������������   � � >+  �    �      �  �                          		   

               � 	 �                          		   

               D �     	
��������   c}(�(
  �	 #�         worker_processes  1; �%      error_log  logs\error.log; �-      error_log  logs\error.log  notice; �+      error_log  logs\error.log  info; �      pid logs/nginx.pid; �      events { �       worker_connections  1024; �	      } �
	      #Server groups �
      http { � �������������������������������������������������������������������������������������������������������������������������������������������������������������   �}(�(
  �	 �          upstream backend { �       �       # -P For the AppBroker to work, all other load balancing methods should be avoided - # �       �       hash $remote_addr consistent; �       �       # - Start of AppBroker Servers - # �       # -  End of AppBroker Servers  - # �       } �       � ��������������������������������������������������������������������������������������������������������������������   `}(�(
  �	 �           �!        # - End of GZIP Options - # �"!       �#"       �$#       # - Start of Extra Options - # �%$       �&%       include mime.types; �'&       'default_type application/octet-stream; �('       fastcgi_buffers 32 32k; �)(       fastcgi_buffer_size 32k; � ���������������������������������������������������������������������������������������������������������������������������������������������������������������� 
  �}(�(
  �	 �   *)       client_body_timeout 7; �+*       client_header_timeout 7; �,+       keepalive_timeout 7; �-,       send_timeout 7; �.-       #large_client_header_buffers 8 32k; �/.       sendfile_max_chunk 128K; �0/       tcp_nopush on; �10       tcp_nodelay on; �21       �32       # - End of Extra Options - # � ������������������������������������������������������������������������������������������������������������������������   �}(�(
  �	 �   43       �54       Mproxy_cache_path cache levels=1:2 keys_zone=appbroker_zone:10m inactive=10m; �65       ;proxy_cache_key "$scheme$request_method$host$request_uri"; �76       	server { �87       (server_name NGINX.server.for.AppBroker; �98       listen 87; �:9       location /status { �;:       stub_status on; �<;       access_log off; �=<       allow 127.0.0.1; � �����������������������������������������������������������������   �}(�(
  �	 �   >=       allow 127.0.0.1; �?>       
deny all; �@?       } �A@       location / { �BA       �CB       # - Start of Proxy options - # �DC       �ED       proxy_cache appbroker_zone; �FE       1proxy_cache_bypass $cookie_nocache $http_pragma; �GF       ;proxy_next_upstream error timeout invalid_header http_500; � ����������������������������������������������������������������������������������������������������������������������   �}(�(
  �	 �   >=       allow 127.0.0.1; �?>       
deny all; �@?       } �A@       location / { �BA       �CB       # - Start of Proxy options - # �DC       �ED       proxy_cache appbroker_zone; �F   //u
�  � 	    �  #   $$   %%   &&   ''   ((   ))   **   ++   ,,   --   ..   //   00   11   22   33   44   55   66   77   88   99   ::   ;;   <<   ==   >>   ??   @@   AA   BB   CC   DD   EE   FF   GG   HH   II   JJ   KK   LL   MM   NN   OO   PP   QQ   RR   SS   TT   UU   VV   WW   XX   YY   ZZ   [[   \D �     	
 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\�����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������   �}(�(
  �	 �          # - Start of GZIP Options - # �       �       	gzip on; �       gzip_disable "msie6"; �       gzip_vary on; �       gzip_proxied any; �       gzip_comp_level 5; �       gzip_buffers  16 8k; �       gzip_http_version 1.1; �       �gzip_types application/atom+xml application/javascript application/json application/rss+xml application/vnd.ms-fontobject application/x-font-ttf application/x-web-app-manifest+json application/xhtml+xml application/xml font/opentype image/svg+xml image/x-icon text/css text/plain text/x-component; � ������������������������������������������������������������������������������������������������������������������������������   }(�(
  �	 �   HG       proxy_connect_timeout 1; �IH       proxy_set_header  Host $host; �JI       proxy_set_header X-Real-IP $remote_addr; �KJ       =proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; �LK       proxy_buffers 8 128k; �ML       proxy_buffer_size 256k; �NM       proxy_read_timeout 1s; �ON       Iproxy_cache_use_stale error timeout http_500 http_502 http_503 http_504; �PO       proxy_cache_revalidate on; �QP       proxy_cache_min_uses 1; � �������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������   H
~  �    �      �  �                          		   

                                                                       !!   ""   ##   $$   %%   &&   ''   ((   ))   **   ++   ,,   --   ..   //   00   11   22   33   44   55   66   77   88   99   ::   ;;   <<   ==   >>   ??   @@   AA   BB   CC   DD   EE   FF   GG   HH   II   JJ   KK   LL   MM   NN   OO   PP   QQ   RR   SS   TT   UU   VV   WW   XX   YY   ZZ   [[   \� 	 �                          		   

                                                                       !!   ""   #����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������   �-2�2  �	 �   RQ       proxy_cache_lock on; �SR       #proxy_cache_valid 200 10m 404 10m; �TS       1add_header X-Proxy-Cache $upstream_cache_status; �UT       �VU       # - End of Proxy options - # �WV       �XW       proxy_pass http://backend; �YX       } �ZY       Tlocation /\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {root /; expires 1M; access_log off; #add_header Cache-Control "public"; } location /\.(?:css|js)$ { root /; expires 1y; access_log off; #add_header Cache-Control "public"; } �[Z       } �\[      } �	�  � [ [ [ �[ 2��  �         CONFDET:CONFIG_DETAIL_ID   _ CONFDET:CONFIG_ID       CONFDET:LINE          CONFDET:CONFIGDETAIL_LINES_KEY   !CONFDET:CONFIG_DETAIL_ID_KEY  �CONFDET:CONFIG_ID_KEY     ć � 	
 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~�������������������������������������������������������������������������������������������������������������������������������� 	
 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~�������������������������������������������������������������������������������������������������������������������������������� @abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ �	   ��  �UNNAMED   �����������������������������������������