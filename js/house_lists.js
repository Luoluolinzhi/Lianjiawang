$(function(){
	var listdata = {
		result : {
			"status" : true ,
			"data" : {
				"list" : [
					{
						"image" : "a.jpg",
						"title" : "新城乐居 3室1厅 410万" ,
						"location" : "3室1厅/93.75m²/东 南 北/新城乐居" ,
						"price_a" : "410万" ,
						"price_b" : "43734元/平",
						"tag_a" : "地铁",
						"tag_b" : "满五年",
						"tag_c" : "新上",
						"tag_d" : "有电梯",
					},
					{
						"image" : "b.jpg" ,
						"title" : "禄长街 户型方正 东南向三居 满五年唯一 已购公房" ,
						"location" : "3室1厅/72.01m²/东南/禄长街头条" ,
						"price_a" : "600万" ,
						"price_b" : "83322元/平" ,
						"tag_a" : "",
						"tag_b" : "满五年",
						"tag_c" : "",
						"tag_d" : "",
					},
					{
						"image" : "c.jpg" ,
						"title" : "毛纺厂南小区 2室1厅 366万" ,
						"location" : "2室1厅/50.7m²/东北/毛纺厂南小区" ,
						"price_a" : "366万",
						"price_b" : "72190元/平",
						"tag_a" : "",
						"tag_b" : "满五年",
						"tag_c" : "",
						"tag_d" : "",
					},
					{
						"image" : "d.jpg" ,
						"title" : "中海城错层三居.客厅挑高3.9米.西南北三面采光" ,
						"location" : "3室1厅/104.17m²/南 西 北/中海城北区" ,
						"price_a" : "750万" ,
						"price_b" : "71998元/平",
						"tag_a" : "地铁",
						"tag_b" : "满五年",
						"tag_c" : "新上",
						"tag_d" : "有电梯",
					},
					{
						"image" : "a.jpg",
						"title" : "新城乐居 3室1厅 410万" ,
						"location" : "3室1厅/93.75m²/东 南 北/新城乐居" ,
						"price_a" : "410万" ,
						"price_b" : "43734元/平",
						"tag_a" : "地铁",
						"tag_b" : "满五年",
						"tag_c" : "新上",
						"tag_d" : "有电梯",
					},
					{
						"image" : "a.jpg",
						"title" : "新城乐居 3室1厅 410万" ,
						"location" : "3室1厅/93.75m²/东 南 北/新城乐居" ,
						"price_a" : "410万" ,
						"price_b" : "43734元/平",
						"tag_a" : "地铁",
						"tag_b" : "满五年",
						"tag_c" : "新上",
						"tag_d" : "有电梯",
					},
					{
						"image" : "b.jpg" ,
						"title" : "禄长街 户型方正 东南向三居 满五年唯一 已购公房" ,
						"location" : "3室1厅/72.01m²/东南/禄长街头条" ,
						"price_a" : "600万" ,
						"price_b" : "83322元/平" ,
						"tag_a" : "",
						"tag_b" : "满五年",
						"tag_c" : "",
						"tag_d" : "",
					},
					{
						"image" : "c.jpg" ,
						"title" : "毛纺厂南小区 2室1厅 366万" ,
						"location" : "2室1厅/50.7m²/东北/毛纺厂南小区" ,
						"price_a" : "366万",
						"price_b" : "72190元/平",
						"tag_a" : "",
						"tag_b" : "满五年",
						"tag_c" : "",
						"tag_d" : "",
					},
					{
						"image" : "d.jpg" ,
						"title" : "中海城错层三居.客厅挑高3.9米.西南北三面采光" ,
						"location" : "3室1厅/104.17m²/南 西 北/中海城北区" ,
						"price_a" : "750万" ,
						"price_b" : "71998元/平",
						"tag_a" : "地铁",
						"tag_b" : "满五年",
						"tag_c" : "新上",
						"tag_d" : "有电梯",
					},
					{
						"image" : "a.jpg",
						"title" : "新城乐居 3室1厅 410万" ,
						"location" : "3室1厅/93.75m²/东 南 北/新城乐居" ,
						"price_a" : "410万" ,
						"price_b" : "43734元/平",
						"tag_a" : "地铁",
						"tag_b" : "满五年",
						"tag_c" : "新上",
						"tag_d" : "有电梯",
					},
				]
			}
		}
	}
	$.ajax({
		url : "",
		type : "get",
		dataType : "json",
		success : function(res){
			/*var blogStr = "";
			var t = listdata.result.data.list;
			for(var i=0;i<t.length;i++){
				blogStr += "<div class='house_lists_eg'><img src='./image/"+t[i].image+"'><div class='ty'>优选</div><div class='house_lists_eg_intro'><div class='title'>"+t[i].title+"</div><div class='location'><p>"+t[i].location+"</p></div><div class='price'><strong>"+t[i].price_a+"</strong><p>"+t[i].price_b+"</p></div><div class='tag'><p class='tag_a'>"+t[i].tag_a+"</p><p class='tag_b'>"+t[i].tag_b+"</p><p class='tag_c'>"+t[i].tag_c+"</p><p class='tag_d'>"+t[i].tag_d+"</p></div></div></div>"			
			}
			$(".house_lists").html(blogStr);*/
		},
		error : function(res){
			var blogStr = "";
			var t = listdata.result.data.list;
			for(var i=0;i<t.length;i++){
				blogStr += "<div class='house_lists_eg'><img src='./image/"+t[i].image+"'><div class='ty'>优选</div><div class='house_lists_eg_intro'><div class='title'>"+t[i].title+"</div><div class='location'><p>"+t[i].location+"</p></div><div class='price'><strong>"+t[i].price_a+"</strong><p>"+t[i].price_b+"</p></div><div class='tag'><p class='tag_a'>"+t[i].tag_a+"</p><p class='tag_b'>"+t[i].tag_b+"</p><p class='tag_c'>"+t[i].tag_c+"</p><p class='tag_d'>"+t[i].tag_d+"</p></div></div></div>"			
			}
			$(".house_lists").html(blogStr);
		}
	})

})
/*"<div class='house_lists_eg'><img src='"++"'><div class="ty">优选</div><div class='house_lists_eg_intro'><div class='title'>"+t.title+"</div><div class='location'><p>"+t.location+"</p></div><div class='price'><strong>"+t.price_a+"</strong><p>"+t.price_b+"</p></div><div class='tag'><p class='tag_a'>"+tag_a+"</p><p class='tag_b'>"+tag_b+"</p><p class='tag_c'>"+tag_c+"</p><p class='tag_d'>"+tag_d+"</p></div></div></div>"*/
