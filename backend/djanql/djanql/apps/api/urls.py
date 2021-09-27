from django.urls import path
from strawberry.django.views import GraphQLView

from djanql.apps.graphql.schema import schema

urlpatterns = [
    path('', GraphQLView.as_view(schema=schema), name='graphql'),
]
