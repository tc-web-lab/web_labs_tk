# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('comments_text', models.TextField()),
                ('comments_article', models.ForeignKey(to='article.Article')),
            ],
            options={
                'db_table': 'comments',
            },
        ),
    ]
