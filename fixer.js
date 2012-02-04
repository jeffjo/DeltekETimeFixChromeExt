
$(function(){
	var myForm = document.getElementById("myOnlyForm")
	if (myForm){
		$("#chargeTable tr:eq(1)").click(function(ev){
			document.getElementById("event").value="showFavorites";
			document.getElementById("myOnlyForm").submit();
		});
		
		$("#chargeTable tr:eq(1)").attr("onclick","");
		
		$("#chargeTable tr:eq(2)").click(function(ev){
		
			document.getElementById("event").value="showChargeForm";
			document.getElementById("ctcd").value = "-LEAVE";
			document.getElementById("cdesc").value = "-GTRI LEAVE";
			document.getElementById("chargeDescription").value = "-GTRI LEAVE";
			document.getElementById("chargeTreeCode").value = "-LEAVE";
			document.getElementById("myOnlyForm").submit();
		});
		
		$("#chargeTable tr:eq(2)").attr("onclick","");
		
	
		$("#myOnlyForm :button:eq(0)").click(function(ev){
			document.getElementById("event").value="filterCharges";
		
			var filterBySelect = document.getElementById("filterBySelect");
			var filterBy = document.getElementById("filterBy");
			filterBy.value = filterBySelect.value;
			if (filterBy.value == "UdtName") {
				if (windowOpenedFrom == "Udt01Id") {
					filterBy.value = "UdtName1";
				}
				else if (windowOpenedFrom == "Udt02Id") {
					filterBy.value = "UdtName2";
				}
			}
			document.getElementById("myOnlyForm").submit();
		});
		$("#myOnlyForm :button:eq(0)").attr("onclick","");
		
		$("#folderIconDiv .generalActiveLink:eq(0)").click(function(ev){
			document.getElementById("event").value="showInitialForm";
			document.getElementById("myOnlyForm").submit();
		});
		$("#folderIconDiv .generalActiveLink:eq(0)").attr("onclick","");
		$("#folderIconDiv .generalLinkActive:eq(0)").click(function(ev){
			document.getElementById("event").value="showInitialForm";
			document.getElementById("myOnlyForm").submit();
		});
		$("#folderIconDiv .generalLinkActive:eq(0)").attr("onclick","");		
	}
});