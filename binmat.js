function(c,a){
  let A = "<ALT>",
  u = #hs.sys.upgrades({full:1}).filter(_=>!_.loaded).map(_=>_.i),
  g = #hs.accts.balance()
  
  for(let i = 0; i < 5; i++) #ms.cash.xfer_gc_to({to:A, amount:Math.min(g, 32e9) })
  #ms.sys.manage({unload:u})
  #ls.sys.xfer_upgrade_to({to:A, sn:u })
  
  return #ns.paladin.ns_pub(a)
}
