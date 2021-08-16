# # !/usr/bin/env python
# import http.server 
# import sys
# class CORSHTTPRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
#     def send_head(self):
#         """Common code for GET and HEAD commands.
#         This sends the response code and MIME headers.
#         Return value is either a file object (which has to be copied
#         to the outputfile by the caller unless the command was HEAD,
#         and must be closed by the caller under all circumstances), or
#         None, in which case the caller has nothing further to do.
#         """
#         path = self.translate_path(self.path)
#         f = None
#         if os.path.isdir(path):
#             if not self.path.endswith('/'):
#                 # redirect browser - doing basically what apache does
#                 self.send_response(301)
#                 self.send_header("Location", self.path + "/")
#                 self.end_headers()
#                 return None
#             for index in "index.html", "index.htm":
#                 index = os.path.join(path, index)
#                 if os.path.exists(index):
#                     path = index
#                     break
#             else:
#                 return self.list_directory(path)
#         ctype = self.guess_type(path)
#         try:
#             # Always read in binary mode. Opening files in text mode may cause
#             # newline translations, making the actual size of the content
#             # transmitted *less* than the content-length!
#             f = open(path, 'rb')
#         except IOError:
#             self.send_error(404, "File not found")
#             return None
#         self.send_response(200)
#         self.send_header("Content-type", ctype)
#         fs = os.fstat(f.fileno())
#         self.send_header("Content-Length", str(fs[6]))
#         self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
#         self.send_header("Access-Control-Allow-Origin", "*")
#         self.send_header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
#         self.send_header("Access-Control-Allow-Headers", "x-api-key,Content-Type")
#         self.end_headers()
#         return f


# def printUsage():
#     print ("Usage:")
#     print (sys.argv[0], "<server port>")

# if __name__ == "__main__":
#     import os
#     import socketserver

#     print ("argv is:", sys.argv)

#     if len(sys.argv) > 2:
#         print ("Wrong number of command line arguments")
#         print ("")
#         printUsage()
#         exit()

#     if len(sys.argv) == 2 and (sys.argv[1] == "-h" or sys.argv[1] == "--help"):
#         printUsage()
#         exit()

#     serverPort = 4000 if len(sys.argv)==1 else int(sys.argv[1])

#     Handler = CORSHTTPRequestHandler
#     # Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

#     httpd = socketserver.TCPServer(("", serverPort), Handler)

#     print ("serving at serverPort", serverPort)
#     httpd.serve_forever()


# from http.server import BaseHTTPRequestHandler, HTTPServer
# # from json import dumps
# from json import dumps

# """ The HTTP request handler """
# class RequestHandler(BaseHTTPRequestHandler):

#   def _send_cors_headers(self):
#       """ Sets headers required for CORS """
#       self.send_header("Access-Control-Allow-Origin", "*")
#       self.send_header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
#       self.send_header("Access-Control-Allow-Headers", "x-api-key,Content-Type")

#   def send_dict_response(self, d):
#       """ Sends a dictionary (JSON) back to the client """
#       self.wfile.write(bytes(dumps(d), "utf8"))
    
#   def do_OPTIONS(self):
#       self.send_response(200)
#       self._send_cors_headers()
#       self.end_headers()

#   def do_GET(self):
#       self.send_response(200)
#       self._send_cors_headers()
#       self.end_headers()

#       response = {}
#       response["status"] = "OK"
#       self.send_dict_response(response)

#   def do_POST(self):
#       self.send_response(200)
#       self._send_cors_headers()
#       self.send_header("Content-Type", "application/json")
#       self.end_headers()

#       dataLength = int(self.headers["Content-Length"])
#       data = self.rfile.read(dataLength)

#       print(data)

#       response = {}
#       response["status"] = "OK"
#       self.send_dict_response(response)


# print("Starting server")
# httpd = HTTPServer(("127.0.0.1", 8000), RequestHandler)
# print("Hosting server on port 8000")
# httpd.serve_forever()


from http.server import HTTPServer, SimpleHTTPRequestHandler


class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super(CORSRequestHandler, self).end_headers()


httpd = HTTPServer(('localhost', 8003), CORSRequestHandler)
httpd.serve_forever()