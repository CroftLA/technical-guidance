module CustomHelpers
  def digital_tools_support
    "[Digital Tools Support]( #{data.site.baseurl}/#{data.site.digital_tools_support} )"
  end

  def infrastructure_support
    "[Infrastructure Support]( #{data.site.baseurl}/#{data.site.infrastructure_support} )"
  end

  def uk_gov_paas
    "[GOV.UK PaaS]( #{data.site.uk_gov_paas} )"
  end

  def service_now
    "[DFE Service Now]( #{data.site.service_now_url} )"
  end

end
