function(c,a){
  let A = "<ALT>",
  u = #hs.sys.upgrades({full:1}).filter(_=>!_.loaded).map(_=>_.sn),
    
  #ms.sys.manage({unload:u})
  #ls.sys.xfer_upgrade_to({to:A, sn:u })

  #ns.paladin.ns_pub(a)
  
  return "IM POOPER ".repeat(200)
}
