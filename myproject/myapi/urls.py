#demo
# from django.urls import path 
# from . import views

# urlpatterns=[path('hello',views.index,name='index')]
# enquiry/urls.py
from django.urls import path
from .views import EnquiryListCreateView, EnquiryDeleteView

# urlpatterns = [
#     path('enquiries/', EnquiryListCreateView.as_view(), name='enquiry-list'),
#     path('enquiries/<int:pk>/', EnquiryDeleteView.as_view(), name='enquiry-delete'),
# ]



from django.urls import path
from .views import EnquiryListCreateView, EnquiryDeleteView

urlpatterns = [
    path('', EnquiryListCreateView.as_view(), name='list-create'),
    path('<int:pk>/', EnquiryDeleteView.as_view(), name='delete'),
]
