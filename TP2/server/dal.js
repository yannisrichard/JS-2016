class Dal
{
	constructor()
	{
		this.episodes = new Map();
		this.episodes.set(1 => { 'season' : 1, 'title' : 'Breaking Bad', 'episode' : 1 });
		this.episodes.set(2 => { 'season' : 1, 'title' : 'Breaking Bad', 'episode' : 2 });
	}

	function getAll()
	{
		return this.episodes;
	}

	exports.getAll = getAll;	
}

module.exports Dal
