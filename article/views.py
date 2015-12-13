from django.shortcuts import render
from django.http.response import HttpResponse
from django.template.loader import get_template # for getting a template
from django.template import Context # for sending variables to template
from django.shortcuts import render_to_response
from article.models import Article, Comments
# Create your views here.

def basic_one(request):
    view = "basic_one"
    html = "<html><body>This is %s view</body></html>" % view
    return HttpResponse(html)

def template_two(request):
    view = "template_two"
    t = get_template('myview.html') #get template file
    html = t.render(Context({'name': view})) #made a context and sen
    #  a variable 'view', with render united variable and html
    return HttpResponse(html)

def template_three_simple(request): # the easiest way
    view = "template_three"
    return render_to_response('myview.html', {'name': view})

def articles(request):
    return render_to_response('articles.html', {'articles': Article.objects.all()})

def article(request, article_id=1):
    return render_to_response('article.html', {'article': Article.objects.get(id=article_id), 'comments': Comments.objects.filter(comments_article_id=article_id)})

