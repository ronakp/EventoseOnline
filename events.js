<script>
	$(function(){
		$("#dialog-1").dialog({
			autoOpen: false,
		});
		$("#button-center").click(function(){
			$("dialog-1").dialog("open");
		});
	});
</script>