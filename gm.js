	<script>
		document.getElementById("detect").addEventListener("click", () => {
			if("geolocation" in navigator) {
				document.getElementById("map").style.display = "inline-block";
				setTimeout(function() {
					navigator.geolocation.getCurrentPosition((result) => {
						var position = {
							lat: result.coords.latitude,
							lng: result.coords.longitude
						}
						var map = new GMaps({
							div: '#map',
							lat: position.lat,
							lng: position.lng
						});

						map.addMarker({
							position: position
						})
					});
				}, 250);
			}else{
				console.error("Geolocation tidak tersedia pada browser kamu.")
			}
		});
	</script>