class ContentTypeMiddleware:
    """
    Middleware to ensure proper UTF-8 content-type headers for all API responses.
    """
    
    def __init__(self, get_response):
        self.get_response = get_response
        
    def __call__(self, request):
        response = self.get_response(request)
        
        # Only modify JSON responses
        content_type = response.get('Content-Type', '')
        if 'application/json' in content_type and 'charset' not in content_type:
            response['Content-Type'] = 'application/json; charset=utf-8'
            
        return response 