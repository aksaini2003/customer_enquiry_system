# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# # Create your views here.
# #here we have to create our api
##DEMO

# @api_view(['GET'])
# def index(request):
#     return Response({'message':'API Response from Django'}) 




# enquiry/views.py
from rest_framework import generics,filters
from .models import Enquiry
from .serializers import EnquirySerializer

class EnquiryListCreateView(generics.ListCreateAPIView):
    queryset = Enquiry.objects.all().order_by('-created_at')
    serializer_class = EnquirySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'email']

class EnquiryDeleteView(generics.DestroyAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer

