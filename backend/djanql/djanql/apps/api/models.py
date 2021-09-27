from django.db import models
from django.utils.translation import gettext as _


class host(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField(null=True, blank=True, default=0)

    class Meta:
        verbose_name = _("host")
        verbose_name_plural = _("hosts")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("host_detail", kwargs={"pk": self.pk})


STATUS_CHOICES = (
    (0, 'draft'),
    (1, 'publish')
)


class post(models.Model):
    host = models.ForeignKey(
        host, on_delete=models.SET_NULL, null=True, blank=True)
    title = models.CharField(max_length=200)
    podcast = models.CharField(max_length=200, null=True, blank=True)
    content = models.TextField()
    excerpt = models.TextField(default="excerpt")
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("post")
        verbose_name_plural = _("posts")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post_detail", kwargs={"pk": self.pk})
