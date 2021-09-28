import strawberry
from djanql.apps.api.models import post
from djanql.apps.graphql.post.post_schema import Post


def get_posts():
    return post.objects.filter(status=1).order_by('-created')


def get_post(id: strawberry.ID):
    return post.objects.get(pk=id)
